DROP TABLE `mt_reset`;
CREATE TABLE `mt_reset` (
  `username` varchar(64) NOT NULL,
  `reset_token` varchar(32) NOT NULL
) TYPE=MyISAM;
