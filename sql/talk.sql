use kishan ;
SET FOREIGN_KEY_CHECKS=0;

DROP TABLE `mt_talk`;
CREATE TABLE `mt_talk` (
  `talk_id` bigint(12) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(12) NOT NULL,
  `tag_id` bigint(12) NOT NULL,
  `reply_to` int(12) default NULL,
  `timestamp` datetime default NULL,
  `last_edit` datetime default NULL,
  `comment` varchar(255) NOT NULL,
   PRIMARY KEY (`talk_id`)
) TYPE=MyISAM;

