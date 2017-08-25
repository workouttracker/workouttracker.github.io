-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2016 at 11:46 AM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS app_database;
 
USE app_database;

--
-- Table structure for table `customers`
--



CREATE TABLE IF NOT EXISTS `app_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(254) NOT NULL,
  `user_mail` varchar(254) NOT NULL,
  `password` varchar(50) NOT NULL,
   PRIMARY KEY (`user_id`)

);


CREATE TABLE IF NOT EXISTS `user_data` (
  `user_id` int(11) NOT NULL,
  `exercise_id` int(11) NOT NULL AUTO_INCREMENT,
  `set` int(11) NOT NULL,
  `rep` int(11) NOT NULL,
  `exercise` varchar(50) NOT NULL,
  `weights` int(5) NOT NULL,
  `day` varchar(50) NOT NULL,
  `frequency` int(11) NOT NULL,
   PRIMARY KEY (`exercise_id`),
  FOREIGN KEY (`user_id`) REFERENCES `app_user`(`user_id`)
);


CREATE TABLE IF NOT EXISTS `user_workout` (
  `user_id` int(11) NOT NULL,
  `workout_id` int(11) NOT NULL AUTO_INCREMENT,
  `set` varchar(30) NOT NULL,
  `exercise` varchar(50) NOT NULL,
  `weights` int(5) NOT NULL,
  `volume` int(10) NOT NULL,
  `day` int(5) NOT NULL,
  `month` int(5) NOT NULL,
  `year` int(5) NOT NULL,
  `order` int(5) NOT NULL,
   PRIMARY KEY (`workout_id`),
  FOREIGN KEY (`user_id`) REFERENCES `app_user`(`user_id`)
);


CREATE TABLE IF NOT EXISTS `user_calender` (
  `user_id` int(11) NOT NULL,
  `calender_id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(10) NOT NULL,
  `day` int(5) NOT NULL,
  `month` int(5) NOT NULL,
  `year` int(5) NOT NULL,
   PRIMARY KEY (`calender_id`),
  FOREIGN KEY (`user_id`) REFERENCES `app_user`(`user_id`)
);


