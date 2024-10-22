package Cpanel::Dovecot::FlushAuthQueue;

# cpanel - Cpanel/Dovecot/FlushAuthQueue.pm        Copyright 2022 cPanel, L.L.C.
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited

use strict;
use warnings;

=encoding utf-8

=head1 NAME

Cpanel::Dovecot::FlushAuthQueue;

=head1 SYNOPSIS

(See subclasses.)

=head1 DESCRIPTION

This cache exists because of the following scenario:

=over

=item 1) Task queue has C<flush_dovecot_auth_cache user@domain.tld>.

=item 2) We enqueue C<flush_dovecot_auth_cache user2@domain.tld>

=back

At this point we want task #1 to incorporate C<user2$domain.tld> rather than
having two nearly-identical tasks in the task queue. L<Cpanel::TaskQueue>
doesn’t facilitate that very readily, though, so instead we store usernames
in this harvester queue (i.e., the present module and subclasses) and have
C<flush_dovecot_auth_cache> harvest from the queue rather than taking arguments.

This module, then, is a “sub-queue” of sorts for the server’s main cPanel
task queue.

=cut

use parent qw( Cpanel::TaskQueue::SubQueue );

our $_DIR = '/var/cpanel/taskqueue/groups/flush_dovecot_auth_cache';

sub _DIR { return $_DIR; }

1;
