package Cpanel::Server::SSE::cpanel::UserTasks::Event::Success;

# cpanel - Cpanel/Server/SSE/cpanel/UserTasks/Event/Success.pm
#                                                  Copyright 2023 cPanel, L.L.C.
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited

=encoding utf8

=head1 NAME

Cpanel::Server::SSE::cpanel::UserTasks::Event::Success - SSE event for failure

=head1 SYNOPSIS

    my $event = Cpanel::Server::SSE::cpanel::UserTasks::Event::Success->new( "This is a Success" );

=cut

use cPstrict;

use parent 'Cpanel::Server::SSE::cpanel::UserTasks::Event';

use constant EVENT_TYPE => q[task_complete];

1;