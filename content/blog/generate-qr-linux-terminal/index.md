---
title: "Generate QR codes quickly in linux terminal"
date: 2022-08-04T20:07:08+05:30
draft: false
tags: ["technology", "linux", "terminal", "programming"]
---

Recently I had to type a long password to an app, but it's super complex that
typing is a headache. Password was in my password manager on laptop
I decided to transfer the password using QR codes and then copy it.

Generating a QR is nothing hard these days, tons of online services for this
now, but the thing is, my data is sensitive. Online services are not an
option. 

I searched how to generate QR codes from terminal and found this cool app called
"**qrencode**". It should be on every major distro repository.

Most common syntax is this.

```sh
qrencode -l L -s 6 -o output.png 'Hello, world!'
```

`-o` option let you set the output and it is a required parameter. You can
output to standard output by giving `-o` the value `-`. The `-l` option is the
error correction level. Possible values are L, M Q, H and L is the lowest, H is
the heighest. M is medium, Q is higher than medium but lower than H. `-s` is the
pixel size. Default is 3 but I prefer 6. Having pixel size 6 will generate large
QR.

Typing that command each time and opening the image is hard work. Let's simplify
the process.  I wrote a shell function for this.

```sh
function generate-qr {
    rand_file_name=$(mktemp -t qrgen.XXXXXX);
    qrencode -s 6 -l H -o "$rand_file_name" "$1";
    sxiv -p "$rand_file_name";
    rm -f "$rand_file_name";
    unset rand_file_name;
}
```

The `mktemp` command will create a temporary file in the OS specific temporary
directory. In our case `/tmp`. If that command is not available, search your
distro repos. It should be there. Then we output the qr in png form to that
temporary file and display it in `sxiv` so the mobile phone can read it. When we
close `sxiv` our qr png will also get deleted.

Now generating QR codes are as easy as this.

```sh
generate-qr "Hello world"
```

That's it. 

Don't be skid. Peace.