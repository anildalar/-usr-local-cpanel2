package Cpanel::Exception::UpdateNow;

# cpanel - Cpanel/Exception/UpdateNow.pm           Copyright 2022 cPanel, L.L.C.
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited

use strict;
use warnings;

=pod

This is used by static scripts to preload all exceptions classes.
This package should be autogenerated.

=cut

require Cpanel::Exception::AdminBinError;                           # PPI USE OK -- force load exception modules
require Cpanel::Exception::AbstractClass;                           # PPI USE OK -- force load exception modules
require Cpanel::Exception::AttributeNotSet;                         # PPI USE OK -- force load exception modules
require Cpanel::Exception::AttributeReadOnly;                       # PPI USE OK -- force load exception modules
require Cpanel::Exception::System::RequiredRoleDisabled;            # PPI USE OK -- force load exception modules
require Cpanel::Exception::Caller;                                  # PPI USE OK -- force load exception modules
require Cpanel::Exception::Collection;                              # PPI USE OK -- force load exception modules
require Cpanel::Exception::CommandAlreadyRunning;                   # PPI USE OK -- force load exception modules
require Cpanel::Exception::ConnectionFailed;                        # PPI USE OK -- force load exception modules
require Cpanel::Exception::ContextError;                            # PPI USE OK -- force load exception modules
require Cpanel::Exception::Database::SchemaOutdated;                # PPI USE OK -- force load exception modules
require Cpanel::Exception::Database::DatabaseCreationFailed;        # PPI USE OK -- force load exception modules
require Cpanel::Exception::Database::DatabaseMissing;               # PPI USE OK -- force load exception modules
require Cpanel::Exception::Database::Error;                         # PPI USE OK -- force load exception modules
require Cpanel::Exception::Database::ServerTime;                    # PPI USE OK -- force load exception modules
require Cpanel::Exception::Database::TableCorruption;               # PPI USE OK -- force load exception modules
require Cpanel::Exception::Database::TableCreationFailed;           # PPI USE OK -- force load exception modules
require Cpanel::Exception::Database::TableInsertionFailed;          # PPI USE OK -- force load exception modules
require Cpanel::Exception::Database::UserMissing;                   # PPI USE OK -- force load exception modules
require Cpanel::Exception::Database::CpuserNotInMap;                # PPI USE OK -- force load exception modules
require Cpanel::Exception::Database::DatabaseCreationInProgress;    # PPI USE OK -- force load exception modules
require Cpanel::Exception::Database::DatabaseNotFound;              # PPI USE OK -- force load exception modules
require Cpanel::Exception::Database::UserNotFound;                  # PPI USE OK -- force load exception modules
require Cpanel::Exception::DnsEntryAlreadyExists;                   # PPI USE OK -- force load exception modules
require Cpanel::Exception::DomainAlreadyExists;                     # PPI USE OK -- force load exception modules
require Cpanel::Exception::DomainDoesNotExist;                      # PPI USE OK -- force load exception modules
require Cpanel::Exception::DomainHasUnknownNameservers;             # PPI USE OK -- force load exception modules
require Cpanel::Exception::DomainNameNotAllowed;                    # PPI USE OK -- force load exception modules
require Cpanel::Exception::DomainNameNotRfcCompliant;               # PPI USE OK -- force load exception modules
require Cpanel::Exception::DomainNotRegistered;                     # PPI USE OK -- force load exception modules
require Cpanel::Exception::DomainOwnership;                         # PPI USE OK -- force load exception modules
require Cpanel::Exception::Email::AccountNotFound;                  # PPI USE OK -- force load exception modules
require Cpanel::Exception::Empty;                                   # PPI USE OK -- force load exception modules
require Cpanel::Exception::EntryAlreadyExists;                      # PPI USE OK -- force load exception modules
require Cpanel::Exception::EntryDoesNotExist;                       # PPI USE OK -- force load exception modules
require Cpanel::Exception::FeatureNotEnabled;                       # PPI USE OK -- force load exception modules
require Cpanel::Exception::FeaturesNotEnabled;                      # PPI USE OK -- force load exception modules
require Cpanel::Exception::ForbiddenInDemoMode;                     # PPI USE OK -- force load exception modules
require Cpanel::Exception::FunctionNotImplemented;                  # PPI USE OK -- force load exception modules
require Cpanel::Exception::HTTP::Network;                           # PPI USE OK -- force load exception modules
require Cpanel::Exception::HTTP::Server;                            # PPI USE OK -- force load exception modules
require Cpanel::Exception::HTTP;                                    # PPI USE OK -- force load exception modules
require Cpanel::Exception::InvalidCharacters;                       # PPI USE OK -- force load exception modules
require Cpanel::Exception::InvalidParameter;                        # PPI USE OK -- force load exception modules
require Cpanel::Exception::InvalidParameters;                       # PPI USE OK -- force load exception modules
require Cpanel::Exception::InvalidUsername;                         # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::CloseError;                          # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::ChdirError;                          # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::ChownError;                          # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::ChrootError;                         # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::DirectoryCloseError;                 # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::DirectoryCreateError;                # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::DirectoryDeleteError;                # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::DirectoryOpenError;                  # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::DirectoryReadError;                  # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::DirectoryRewindError;                # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::ExecError;                           # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::FcntlError;                          # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::FileCloseError;                      # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::FileCopyError;                       # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::FileNotFound;                        # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::FileOpenError;                       # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::FileReadError;                       # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::FileSeekError;                       # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::FileTruncateError;                   # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::FileWriteError;                      # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::FlockError;                          # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::ForkError;                           # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::LinkError;                           # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::RenameError;                         # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::SelectError;                         # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::SocketOpenError;                     # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::SocketWriteError;                    # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::StatError;                           # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::SymlinkCreateError;                  # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::SymlinkReadError;                    # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::UnlinkError;                         # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::WriteError;                          # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::ReadError;                           # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::SocketConnectError;                  # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::ChmodError;                          # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::FileCreateError;                     # PPI USE OK -- force load exception modules
require Cpanel::Exception::IOError;                                 # PPI USE OK -- force load exception modules
require Cpanel::Exception::JSONParseError;                          # PPI USE OK -- force load exception modules
require Cpanel::Exception::MissingMethod;                           # PPI USE OK -- force load exception modules
require Cpanel::Exception::MissingParameter;                        # PPI USE OK -- force load exception modules
require Cpanel::Exception::MissingParameters;                       # PPI USE OK -- force load exception modules
require Cpanel::Exception::ModSecurity::DuplicateQueueItem;         # PPI USE OK -- force load exception modules
require Cpanel::Exception::ModuleLoadError;                         # PPI USE OK -- force load exception modules
require Cpanel::Exception::Netlink;                                 # PPI USE OK -- force load exception modules
require Cpanel::Exception::ProcessFailed::Error;                    # PPI USE OK -- force load exception modules
require Cpanel::Exception::ProcessFailed::Signal;                   # PPI USE OK -- force load exception modules
require Cpanel::Exception::ProcessFailed::Timeout;                  # PPI USE OK -- force load exception modules
require Cpanel::Exception::Reserved;                                # PPI USE OK -- force load exception modules
require Cpanel::Exception::ReservedSubdomain;                       # PPI USE OK -- force load exception modules
require Cpanel::Exception::ResourceLimitReached;                    # PPI USE OK -- force load exception modules
require Cpanel::Exception::RootProhibited;                          # PPI USE OK -- force load exception modules
require Cpanel::Exception::SMTP;                                    # PPI USE OK -- force load exception modules
require Cpanel::Exception::SMTP::FailedRecipient;                   # PPI USE OK -- force load exception modules
require Cpanel::Exception::TempFileCreateError;                     # PPI USE OK -- force load exception modules
require Cpanel::Exception::Timeout;                                 # PPI USE OK -- force load exception modules
require Cpanel::Exception::TooManyBytes;                            # PPI USE OK -- force load exception modules
require Cpanel::Exception::Unsupported;                             # PPI USE OK -- force load exception modules
require Cpanel::Exception::UserNotFound;                            # PPI USE OK -- force load exception modules
require Cpanel::Exception::AccessDeniedToAccount;                   # PPI USE OK -- force load exception modules
require Cpanel::Exception::SystemCall;                              # PPI USE OK -- force load exception modules
require Cpanel::Exception::Services::Unknown;                       # PPI USE OK -- force load exception modules
require Cpanel::Exception::UserdataLookupFailure;                   # PPI USE OK -- force load exception modules
require Cpanel::Exception::RemoteMySQL::UnsupportedAuthPlugin;      # PPI USE OK -- force load exception modules
require Cpanel::Exception::RemoteMySQL::InsufficientPrivileges;     # PPI USE OK -- force load exception modules
require Cpanel::Exception::RecordNotFound;                          # PPI USE OK -- force load exception modules
require Cpanel::Exception::NameConflict;                            # PPI USE OK -- force load exception modules
require Cpanel::Exception::IO::FileLockError;                       # PPI USE OK -- force load exception modules

1;                                                                  # PPI USE OK -- force load exception modules