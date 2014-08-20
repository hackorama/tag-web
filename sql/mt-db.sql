use kishan ;
SET FOREIGN_KEY_CHECKS=0;
#----------------------------
# Table structure for tags 
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
  `timestamp` datetime default NULL,
   PRIMARY KEY (`icon_id`)
) TYPE=MyISAM;

INSERT INTO mt_scans (tag_id, user_id, timestamp) VALUES( '2', '1', '2005-11-30 19:59:17');
UPDATE mt_tags SET tag_hits=tag_hits+1 WHERE id='2'  AND user_id='1';

INSERT INTO mt_tags (title, url, info, user_id, timestamp) VALUES('The Title', 'http://www.url.com', 'This is a test', '1', '2005-11-30 19:59:17');
UPDATE mt_tags SET tag=123456789011+LAST_INSERT_ID() WHERE id=LAST_INSERT_ID();
