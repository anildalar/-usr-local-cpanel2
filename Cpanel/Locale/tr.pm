package Cpanel::Locale::tr;

# cpanel - Cpanel/Locale/tr.pm                     Copyright 2022 cPanel, L.L.C.
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited

use strict;

use Cpanel::Locale        ();
use Cpanel::Locale::Utils ();

$Cpanel::Locale::tr::VERSION = '0.7';
@Cpanel::Locale::tr::ISA     = ('Cpanel::Locale');

sub new {
    my $class = shift;

    Cpanel::Locale::Utils::init_package();    # Cpanel::Locale::Utils is brought in via Cpanel::Locale

    return $class->SUPER::new();
}
1;