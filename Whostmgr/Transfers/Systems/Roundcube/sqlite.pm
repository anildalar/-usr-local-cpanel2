package Whostmgr::Transfers::Systems::Roundcube::sqlite;

#                                      Copyright 2024 WebPros International, LLC
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited.

use cPstrict;

use Try::Tiny;
use Cpanel::SafeRun::Object ();

sub do_restore ( $self, $cpconf_ref ) {

    # one last check -- if we're actually a mysql system, barf. Not supported.
    if ( $cpconf_ref->{'roundcube_db'} eq 'mysql' ) {

        # If this account is ever transferred again to a server with sqlite, let's make sure
        # this stale Roundcube database doesn't cause problems. But, keep it in case the user DOES want it.
        _rename_old_sqlite_dbs( $self->{'_utils'}->homedir() . "/etc" );

        $self->{'_utils'}->add_skipped_item("sqlite to mysql roundcube restore is not supported.");
        return 1;
    }

    # Interestingly, the "good stuff" will be printed to the cPanel error log.
    # All we get here is a summary. As such, if you want the full monty about
    # what happened, you must cross reference any statements subject to the
    # Cpanel::Logger invocations to the few STDOUT lines generated by
    # update-roundcube-sqlite-db.
    # I tried finding various ways to get Cpanel::Logger to behave within the
    # context of the script here, but nothing works. As far as I can tell,
    # the arguments of 'use_no_files', 'open_now' and the hash param of
    # 'use_stdout' are in fact quite useless in this context.
    # Also, you may wonder why I'm using new_or_die -- Easiest way to get a
    # localized error message from this is just to let it die even though
    # that's not what I actually want here.
    my $worked = 0;
    try {
        my $run = Cpanel::SafeRun::Object->new_or_die(
            program => '/usr/local/cpanel/bin/update-roundcube-sqlite-db',
            args    => [ qw{--foreground --user}, $self->{'_utils'}->local_username() ],
        );
        $self->out( $run->stdout() );
        $worked = 1;
    }
    catch {
        $self->warn($_);
    };
    return $worked;
}

# Rename any pre-existing sqlite databases to avoid cruft if the account is
# ever transferred to a server with sqlite Roundcube
sub _rename_old_sqlite_dbs ($directory) {
    require Cpanel::SafeFind;

    my @old_sqlite_dbs = ();
    Cpanel::SafeFind::find(
        {
            'no_chdir' => 1,
            'wanted'   => sub {
                push @old_sqlite_dbs, $File::Find::name if $File::Find::name =~ /\.rcube\.db$/;

                return;
            }
        },
        $directory
    );

    my $timestamp = time();
    for my $db (@old_sqlite_dbs) {
        rename( $db, "$db.$timestamp" );
    }

    return;
}

1;