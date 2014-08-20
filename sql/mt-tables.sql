use kishan ;
SET FOREIGN_KEY_CHECKS=0;
#----------------------------
# Table structure for tags 
#----------------------------
#
# mt_scans.channel
#	0 - web/default
#	1 - mail
#
# mt_scans.method
#	0 - img
#	1 - text
#	2 - img->text
#
# mt_scans.status
#	0 - normal
#	1 - new
#	2 - deleted tag
#
# mt_msg.status
#	0 - not read 
# 	1 - delete
# 	2 - wait to delete
#
#----------------------------

DROP TABLE `mt_user_tag`;

CREATE TABLE `mt_user_tag` (
  `tag_id` bigint(12) NOT NULL,
  `user_id` bigint(12) NOT NULL
) TYPE=MyISAM;

DROP TABLE `mt_scans`;
CREATE TABLE `mt_scans` (
  `id` bigint(12) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(12) NOT NULL,
  `tag_id` bigint(12) NOT NULL,
  `timestamp` datetime default NULL,
  `channel` int(2) NOT NULL default '0',
  `method` int(2) NOT NULL default '0',
  `status` int(2) NOT NULL default '0',
   PRIMARY KEY (`id`)
) TYPE=MyISAM;

DROP TABLE `mt_tags`;
CREATE TABLE `mt_tags` (
  `id` bigint(12) NOT NULL AUTO_INCREMENT,
  `tag` bigint(12) NOT NULL UNIQUE,
  `user_id` bigint(12) NOT NULL,
  `timestamp` datetime default NULL,
  `tag_hits` bigint(12) default 0,
  `url` varchar(255) default NULL,
  `title` varchar(128) default NULL,
  `info` mediumtext default NULL,
   PRIMARY KEY (`id`)
) TYPE=MyISAM;

DROP TABLE `mt_tag_opts`;
CREATE TABLE `mt_tag_opts` (
  `opt_id` bigint(12) NOT NULL AUTO_INCREMENT,
  `tag_id` bigint(12) NOT NULL,
  `opt_type` int(4) NOT NULL default '1',
  `opt_val` int(4) NOT NULL default '1',
   PRIMARY KEY (`opt_id`)
) TYPE=MyISAM;

DROP TABLE `mt_users`; 
CREATE TABLE `mt_users` (
  `user_id` bigint(12) NOT NULL AUTO_INCREMENT,
  `timestamp` datetime default NULL,
  `username` varchar(64) NOT NULL UNIQUE,
  `password` varchar(32) default NULL,
  `passcode` varchar(8) default NULL,
  `email` varchar(128) default NULL,
  `mobile` int(16) default NULL,
  `mobile_mail` varchar(128) default NULL,
  `web` varchar(255) default NULL,
  `logintime` datetime default NULL,
  `icon_hash` varchar(32) default 'avatar',
   PRIMARY KEY (`user_id`)
) TYPE=MyISAM;

DROP TABLE `mt_user_opts`;
CREATE TABLE `mt_user_opts` (
  `opt_id` bigint(12) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(12) NOT NULL,
  `opt_type` int(4) NOT NULL default '1',
  `opt_val` int(4) NOT NULL default '1',
   PRIMARY KEY (`opt_id`)
) TYPE=MyISAM;

DROP TABLE `mt_icons`;
CREATE TABLE `mt_icons` (
  `icon_id` bigint(12) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(12) NOT NULL,
  `hash` varchar(32) default NULL,
  `timestamp` datetime default NULL,
   PRIMARY KEY (`icon_id`)
) TYPE=MyISAM;

DROP TABLE `mt_msg`;
CREATE TABLE `mt_msg` (
  `msg_id` bigint(12) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(12) NOT NULL,
  `timestamp` datetime default NULL,
  `msg_file` varchar(32) default NULL,
  `sender` varchar(128) default NULL,
  `origin` varchar(128) default NULL,
  `status` int(2) NOT NULL default '0',
   PRIMARY KEY (`msg_id`)
) TYPE=MyISAM;

DROP TABLE `mt_talk`;
CREATE TABLE `mt_talk` (
  `talk_id` bigint(12) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(12) NOT NULL,
  `tag_id` bigint(12) NOT NULL,
  `reply_to` int(12) default NULL,
  `timestamp` datetime default NULL,
  `last_edit` datetime default NULL,
   PRIMARY KEY (`talk_id`)
) TYPE=MyISAM;

DROP TABLE `mt_reset`;
CREATE TABLE `mt_reset` (
  `username` varchar(64) NOT NULL,
  `reset_token` varchar(32) NOT NULL
) TYPE=MyISAM;
