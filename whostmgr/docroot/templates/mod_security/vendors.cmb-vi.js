//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/templates/mod_security/vendors.cmb.js
// Generated: /usr/local/cpanel/whostmgr/docroot/templates/mod_security/vendors.cmb-vi.js
// Module:    /templates/mod_security/vendors.cmb-vi
// Locale:    vi
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Add Vendor":"Thêm Nhà Cung Cấp","An error occurred in the attempt to retrieve the vendor information.":"Đã xảy ra lỗi khi tìm cách truy xuất thông tin nhà cung cấp.","Manage Vendors":"Quản Lý Nhà Cung Cấp","Select Vendor Rule Sets":"Chọn Nhóm Quy Tắc Nhà Cung Cấp","The URL must contain a protocol, domain, and file name in the correct format. (Example: [asis,https://example.com/example/meta_example.yaml])":"URL phải chứa giao thức, miền và tên tệp ở đúng định dạng. (Ví dụ: [asis,https://example.com/example/meta_example.yaml])","The URL must use one of the following recognized protocols: [join,~, ,_1]":"URL phải dùng một trong các giao thức nhận dạng sau: [join,~, ,_1]","The file name must have the .yaml extension. (Example: [asis,meta_example.yaml])":"Tên tệp phải có đuôi .yaml. (Ví dụ: [asis,meta_example.yaml])","The file name must start with meta_, followed by the vendor name and have the .yaml extension. (Example: [asis,meta_example.yaml])":"Tên tệp phải bắt đầu bằng meta_, theo sau là tên nhà cung cấp và có đuôi .yaml. (Ví dụ: [asis,meta_example.yaml])","The file name must use the meta_ prefix, followed by the vendor name and a .yaml extension. The vendor name must only contain characters in the following set: [join,~, ,_1] (Example: [asis,meta_example.yaml])":"Tên tệp phải sử dụng meta_ prefix, theo sau là tên nhà cung cấp và đuôi tệp .yaml. Tên nhà cung cấp chỉ được chứa các ký tự thuộc nhóm sau đây: [join,~, ,_1] (Ví dụ: [asis,meta_example.yaml])","The file name must use the meta_ prefix. (Example: [asis,meta_example.yaml])":"Tên tệp phải sử dụng meta_ prefix. (Ví dụ: [asis,meta_example.yaml])","The protocol should be followed by a colon and two forward slashes. (Example: [asis,https://])":"Giao thức phải theo sau bằng dấu chấm phẩy và hai dấu gạch chéo. (Ví dụ: [asis,https://])","The system could not disable the configuration files.":"Hệ thống không tắt được tệp cấu hình.","The system could not enable the configuration files.":"Hệ thống không bật được tệp cấu hình.","The system could not find the specified [asis,vendor_id].":"Hệ thống không tìm được [asis,vendor_id] xác định.","The system experienced the following error when it attempted to install the “[_1]” vendor: [_2]":"Hệ thống gặp lỗi sau khi tìm cách cài đặt nhà cung cấp “[_1]”: [_2]","The system experienced the following error when it attempted to remove the vendor [_1]: [_2]":"Hệ thống gặp lỗi sau khi tìm cách xóa nhà cung cấp [_1]: [_2]","The system failed to pass the ID query string parameter.":"Hệ thống không truyền được tham số xâu truy vấn ID.","The vendor name part of the file name must only contain characters in the following set: [join,~, ,_1] (Example: [asis,meta_example.yaml])":"Phần tên nhà cung cấp trong tên tệp chỉ được chứa các ký tự thuộc nhóm sau đây: [join,~, ,_1] (Ví dụ: [asis,meta_example.yaml])","You have multiple vendors with the same [asis,vendor_id].":"Bạn có nhiều nhà cung cấp với [asis,vendor_id] giống nhau.","You have successfully added “[_1]” to the vendor configuration list.":"Bạn đã thêm thành công “[_1]” vào danh sách cấu hình nhà cung cấp.","You have successfully disabled all of the configuration files.":"Bạn đã tắt thành công tất cả các tệp cấu hình.","You have successfully disabled automatic updates for the vendor: [_1]":"Bạn đã tắt thành công các bản cập nhật tự động cho nhà cung cấp: [_1]","You have successfully disabled some of the configuration files. The files that the system failed to disable are marked below.":"Bạn đã tắt thành công một số tệp cấu hình. Các tệp mà hệ thống không tắt được sẽ được đánh dấu dưới đây.","You have successfully disabled the configuration file: [_1]":"Bạn đã tắt thành công tệp cấu hình: [_1]","You have successfully disabled the vendor: [_1]":"Bạn đã tắt thành công nhà cung cấp: [_1]","You have successfully enabled all of the configuration files.":"Bạn đã bật thành công tất cả các tệp cấu hình.","You have successfully enabled automatic updates for the vendor: [_1]":"Bạn đã bật thành công các bản cập nhật tự động cho nhà cung cấp: [_1]","You have successfully enabled some of the configuration files. The files that the system failed to enable are marked below.":"Bạn đã bật thành công một số tệp cấu hình. Các tệp mà hệ thống không bật được sẽ được đánh dấu dưới đây.","You have successfully enabled the configuration file: [_1]":"Bạn đã bật thành công tệp cấu hình: [_1]","You have successfully enabled the vendor: [_1]":"Bạn đã bật thành công nhà cung cấp: [_1]","You have successfully installed the vendor: [_1]":"Bạn đã cài đặt thành công nhà cung cấp: [_1]","You have successfully removed the vendor: [_1]":"Bạn đã xóa thành công nhà cung cấp: [_1]"};

    if (!this.LEXICON) {
        this.LEXICON = {};
    }

    for(var item in newLex) {
        if(newLex.hasOwnProperty(item)) {
            var value = newLex[item];
            if (typeof(value) === "string" && value !== "") {
                // Only add it if there is a value.
                this.LEXICON[item] = value;
            }
        }
    }
})();
//~~END-GENERATED~~