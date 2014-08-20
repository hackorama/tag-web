use kishan ;
SET FOREIGN_KEY_CHECKS=0;
#----------------------------
# Table structure for tags 
#----------------------------

DROP TABLE `mt_icons`;
CREATE TABLE `mt_icons` (
  `icon_id` bigint(12) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(12) NOT NULL,
  `timestamp` datetime default NULL,
   PRIMARY KEY (`icon_id`)
) TYPE=MyISAM;

