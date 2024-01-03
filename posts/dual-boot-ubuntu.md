---
title: "How to dual-boot Ubuntu and Windows 11"
subtitle: "Achieving Dual-Boot Harmony: Windows 11 and Ubuntu Installation Guide"
date: "2020-12-27"
banner: "./images/dual-boot-ubuntu.jpg"
tags:
  - "Linux"
  - "Windows"
---

Now a days, is really common to see poeple who need a dual-boot system with Windows and some other linux distribution, because all the good thinks both operating systems offer to the customer. So for this reason, here I post all the steps I've used to set up a sual-boot system on any PC that already uses a Windows OS.

## Prerequisites

Before start this tutorial, there are some prerequisites we should have into a acount:

- A preinstalled Windows 11 operating system in our PC
- A BIOS in UEFI mode
- An enpty 8Gb USB drive
- Internet connection

### Check the UEFI mode

To check if our PC have the correct UEFi mode, we can search for "_system information_" in our windows machine. Once there we can see what kind of BIOS Mode we have.

![](/images/uefi-mode.png)

## Enviroment Set-Up

The first thing we shold do, is to reserve the necessary space we want on our disk. So for this, we need to go to the disk management create a new partition with the space we want for our new linux distribution.

![](/images/dual_boot_disk_layout.gif)

Once we have set up the space we want on the new partition, we need to:

- Instal the .iso from [ubuntu webside](https://ubuntu.com/download/desktop)
- Install [rufus](https://rufus.ie/es/)

Then, using the rufus software, we need to set up the pen drive we are going to use (at least 8gb of memory) installing the .iso file of our linux distribution.

## Installing the OS

Now that we have the usb drive set-up with the OS, we have to restart the pc and open the BIOS (press F12, F10, Delete, Supr keys for opening). Once there, we have to set up the usb drive as the first boot option on the next boot.

### Ubuntu Installer

When we boot on the usb drive, we will be on the Ubuntu Installer, on now on, it is very fast forward, so every user can choose the configuration that he wants until the "_Installation Type_" menu, where we should check the "Something else" option.

There select the free space, create a new partition in the "+" button, and assing 2048 mb of space as a primary type partition and use as swap partition.

The rest of space create a partition as a primary partition with format "_EXT4_" and mount point in "/"

One all this is done, we can continue with the installation.

## Shared folder between systems

As we have created a dual-boot system on our PC, it's probably that someone could want to have a shared folder between both operating systems. Create this shared folder is quite easy to set-up.

To chive this, follow this steps:

- Create a new ntfs partition (in ubuntu you can install GParted)
- Mount the new partition
- Create a folder in the root where you want to share files

To count the new partition, you could do this command:

```bash
sudo mount -t ntfs o rw /dev/*partition* /forder/
```

Also, if you find some permision problems, you can execute this command on the partition folder:

```bash
sudo chmod -R 777 .
```

## Conclusions

On this tutorial, we have seen how to set-up a dual-boot system with Windows and Ubuntu. Also, it has been explained how to set-up a shared folder between both operating systems.

I hope this tutorial has been usefull!
