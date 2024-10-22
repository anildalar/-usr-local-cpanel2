package Cpanel::Server::Type::Role::MailSend;

# cpanel - Cpanel/Server/Type/Role/MailSend.pm     Copyright 2022 cPanel, L.L.C.
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited

=encoding utf-8

=head1 NAME

Cpanel::Server::Type::Role::MailSend - MailSend role for server profiles

=head1 SYNOPSIS

    use Cpanel::Server::Type::Role::MailSend;

    my $role = Cpanel::Server::Type::Role::MailSend->new();
    my $is_enabled = $role->is_enabled();

=head1 DESCRIPTION

Subclass of C<Cpanel::Server::Type::Role> that controls sending mail and features

When this role is enabled a MTA will listen and process the mail queue.

=head1 SUBROUTINES

=cut

use strict;
use warnings;

use parent qw(
  Cpanel::Server::Type::Role::TouchFileRole
);

my ( $NAME, $DESCRIPTION );

our $TOUCHFILE = $Cpanel::Server::Type::Role::TouchFileRole::ROLES_TOUCHFILE_BASE_PATH . "/mailsend";

our $SERVICES = [
    'exim',
    'exim-altport',
];

sub _NAME {
    require 'Cpanel/LocaleString.pm';    ## no critic qw(Bareword) - hide from perlpkg
    $NAME ||= Cpanel::LocaleString->new("Send Mail");
    return $NAME;
}

sub _DESCRIPTION {
    require 'Cpanel/LocaleString.pm';    ## no critic qw(Bareword) - hide from perlpkg
    $DESCRIPTION ||= Cpanel::LocaleString->new("Send Mail allows users to send email.");
    return $DESCRIPTION;
}

sub _TOUCHFILE { return $TOUCHFILE; }

=head2 SERVICES

Gets the list of services that are needed to fulfil the role

=over 2

=item Input

=over 3

None

=back

=item Output

=over 3

=item C<ARRAYREF>

Returns an C<ARRAYREF> of strings representing the services that the role needs

=back

=back

=cut

sub SERVICES { return $SERVICES; }

1;