/*
 Navicat Premium Data Transfer

 Source Server         : My
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : localhost:3306
 Source Schema         : vuepanel

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : 65001

 Date: 15/05/2018 00:33:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (4, '2014_10_12_000000_create_users_table', 1);
INSERT INTO `migrations` VALUES (5, '2014_10_12_100000_create_password_resets_table', 1);
INSERT INTO `migrations` VALUES (6, '2018_05_12_043106_entrust_setup_tables', 1);

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets`  (
  `email` varchar(191) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  INDEX `password_resets_email_index`(`email`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for permission_role
-- ----------------------------
DROP TABLE IF EXISTS `permission_role`;
CREATE TABLE `permission_role`  (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`permission_id`, `role_id`) USING BTREE,
  INDEX `permission_role_role_id_foreign`(`role_id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of permission_role
-- ----------------------------
INSERT INTO `permission_role` VALUES (4, 1);
INSERT INTO `permission_role` VALUES (4, 2);
INSERT INTO `permission_role` VALUES (4, 3);
INSERT INTO `permission_role` VALUES (7, 1);
INSERT INTO `permission_role` VALUES (7, 2);
INSERT INTO `permission_role` VALUES (7, 3);
INSERT INTO `permission_role` VALUES (7, 8);
INSERT INTO `permission_role` VALUES (8, 1);
INSERT INTO `permission_role` VALUES (8, 2);
INSERT INTO `permission_role` VALUES (8, 3);
INSERT INTO `permission_role` VALUES (9, 1);
INSERT INTO `permission_role` VALUES (9, 2);
INSERT INTO `permission_role` VALUES (9, 3);
INSERT INTO `permission_role` VALUES (9, 8);
INSERT INTO `permission_role` VALUES (10, 1);
INSERT INTO `permission_role` VALUES (10, 2);
INSERT INTO `permission_role` VALUES (10, 3);
INSERT INTO `permission_role` VALUES (10, 8);
INSERT INTO `permission_role` VALUES (12, 1);
INSERT INTO `permission_role` VALUES (12, 2);
INSERT INTO `permission_role` VALUES (13, 1);
INSERT INTO `permission_role` VALUES (13, 2);
INSERT INTO `permission_role` VALUES (14, 1);
INSERT INTO `permission_role` VALUES (14, 2);
INSERT INTO `permission_role` VALUES (15, 1);
INSERT INTO `permission_role` VALUES (15, 2);

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `display_name` varchar(191) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `description` varchar(191) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `permissions_name_unique`(`name`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of permissions
-- ----------------------------
INSERT INTO `permissions` VALUES (12, 'permission_edit', 'Permission Edit', 'ths', '2018-05-13 15:35:22', '2018-05-13 15:35:22');
INSERT INTO `permissions` VALUES (4, 'permission_add', 'user delete', 'admin', '2018-05-13 09:01:02', '2018-05-13 11:39:43');
INSERT INTO `permissions` VALUES (7, 'role_manage', 'manage', 'manage', '2018-05-13 11:41:31', '2018-05-13 11:43:38');
INSERT INTO `permissions` VALUES (8, 'user_edit', 'admin', 'admin', '2018-05-13 11:42:40', '2018-05-13 11:42:40');
INSERT INTO `permissions` VALUES (9, 'user_manage', 'admin', 'admin', '2018-05-13 11:42:52', '2018-05-13 11:42:52');
INSERT INTO `permissions` VALUES (10, 'permission_manage', 'admin', 'admin', '2018-05-13 11:44:46', '2018-05-13 11:45:05');
INSERT INTO `permissions` VALUES (13, 'permission_delete', 'Permission delete', NULL, '2018-05-13 15:35:40', '2018-05-13 15:35:40');
INSERT INTO `permissions` VALUES (14, 'user_add', 'asd', 'asd', '2018-05-13 15:35:57', '2018-05-13 18:26:50');
INSERT INTO `permissions` VALUES (15, 'role_edit', 'sdasdasd', 'asda', '2018-05-13 15:36:27', '2018-05-13 18:26:54');

-- ----------------------------
-- Table structure for role_user
-- ----------------------------
DROP TABLE IF EXISTS `role_user`;
CREATE TABLE `role_user`  (
  `user_id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`) USING BTREE,
  INDEX `role_user_role_id_foreign`(`role_id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of role_user
-- ----------------------------
INSERT INTO `role_user` VALUES (1, 1);
INSERT INTO `role_user` VALUES (2, 3);
INSERT INTO `role_user` VALUES (3, 2);
INSERT INTO `role_user` VALUES (4, 3);
INSERT INTO `role_user` VALUES (6, 1);
INSERT INTO `role_user` VALUES (7, 1);
INSERT INTO `role_user` VALUES (8, 2);
INSERT INTO `role_user` VALUES (9, 2);
INSERT INTO `role_user` VALUES (14, 2);
INSERT INTO `role_user` VALUES (16, 2);
INSERT INTO `role_user` VALUES (17, 3);
INSERT INTO `role_user` VALUES (21, 3);
INSERT INTO `role_user` VALUES (22, 2);
INSERT INTO `role_user` VALUES (23, 2);
INSERT INTO `role_user` VALUES (24, 2);
INSERT INTO `role_user` VALUES (25, 1);
INSERT INTO `role_user` VALUES (52, 2);
INSERT INTO `role_user` VALUES (55, 2);
INSERT INTO `role_user` VALUES (56, 2);

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `display_name` varchar(191) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `description` varchar(191) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `roles_name_unique`(`name`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, 'admin', 'this is admin', 'okay', '2018-05-12 06:28:54', '2018-05-13 14:13:39');
INSERT INTO `roles` VALUES (2, 'user', 'Richmond Rolfson', 'I could shut up like a telescope.\' And so it was all ridges and furrows; the balls were live.', '2018-05-12 06:31:07', '2018-05-12 06:31:07');
INSERT INTO `roles` VALUES (3, 'agent', 'Hilda Gerhold', 'Alice put down yet, before the end of the soldiers shouted in reply. \'Please come back and see.', '2018-05-12 06:31:11', '2018-05-12 06:31:11');
INSERT INTO `roles` VALUES (8, 'adminadmin', 'adminadmi', 'nadminasdmi', '2018-05-13 14:27:06', '2018-05-13 14:27:06');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(191) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_unique`(`email`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 59 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '1215123', 'admin@admin.com', '$2y$10$9mgxfsjQh05eaS19.sQrYeaOzqQr7RbBoBG/GNB7hKW7KqhGfWl/.', 'zZubro4xO6', '2018-05-12 06:15:05', '2018-05-13 07:29:14');
INSERT INTO `users` VALUES (2, 'sreichel', 'lera20@damore.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'mL0dFrQhbg', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (3, 'hand.gregory', 'tsporer@okuneva.info', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'LATyvyjEG2', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (4, 'cblock', 'lamont.brakus@yahoo.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'NCg7H0zOkP', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (6, 'gayle39', 'era.murazik@trantow.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'kw0SVv68k3', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (7, 'leonie.bruen', 'karl.heathcote@hotmail.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'C7KpuXGuxo', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (8, 'zulauf.lula', 'thiel.noe@hotmail.com', '$2y$10$/xlNO/f503nL.1b5Bw4Y7.hYATqB5K0ztoonr8fDu2DQBdyc.dixu', '7AntATIdqj', '2018-05-12 06:15:05', '2018-05-13 06:30:26');
INSERT INTO `users` VALUES (9, 'niko54', 'carmelo.boehm@gmail.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'JDlhRSxATv', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (55, 'qweqwe', 'qweqwee@qwe.com', '$2y$10$UvdD.M6X9F3uiIYmNLL.UerbXkcJRPTw2QVelHnG/wEz1mPPLdQhW', NULL, '2018-05-13 17:53:06', '2018-05-13 17:53:06');
INSERT INTO `users` VALUES (56, 'qweqwe', 'ewqwe@qwe.com', '$2y$10$MNpV3NfFJlQ5/ON6VI6d1uR6QLuiMgZr1g1i1MPIbHsI2ejRQQpBa', NULL, '2018-05-13 17:53:37', '2018-05-13 17:53:37');
INSERT INTO `users` VALUES (57, 'adminasd', 'asdmain@asda.com', '$2y$10$TJpv5jqTgPItoIrqVH.1fepIo9MRs93gmP65ABDsgkdPQnNqLCwSe', NULL, '2018-05-13 18:05:32', '2018-05-13 18:05:32');
INSERT INTO `users` VALUES (58, 'asdasda', 'Wqeq@asd.com', '$2y$10$sMhHEtg1DOACoLLQFsabOeaVzC9SVPgru9AyRafsVQJgVAOA1IBCi', NULL, '2018-05-13 18:06:12', '2018-05-13 18:06:12');
INSERT INTO `users` VALUES (14, 'dell.miller', 'cicero32@wiza.com', '$2y$10$Yxg61pQqSRBwX2P81GR4WuUCfejdSN9yP4NkyM7xkMouLnPOE5zS6', 'KHWpraEo8A', '2018-05-12 06:15:05', '2018-05-13 06:31:43');
INSERT INTO `users` VALUES (54, 'qweqwe', 'qweqwe@qwe.com', '$2y$10$jc9QxOKNyLb2SMzAqIYr/OAPHlIjIZloSymLb/36jHJKc2qMScG7G', NULL, '2018-05-13 17:48:40', '2018-05-13 17:48:40');
INSERT INTO `users` VALUES (16, 'zachary.jast', 'amira58@yahoo.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'bQ3TzAZDoS', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (17, 'ogaylord', 'rolfson.deron@franecki.org', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'cxPhWkYE3E', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (18, 'turner.kristy', 'weber.magnolia@hotmail.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'qR0aQB4w8U', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (19, 'dach.violet', 'christa97@yahoo.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'jLgI1RwM8s', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (20, 'schoen.tyrel', 'bhane@feeney.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'yTqz9BjI38', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (21, 'fsanford', 'berniece.bernier@yahoo.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'SwGMXL2heX', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (22, 'jocelyn.gorczany', 'sylvester.gutmann@yahoo.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'fJT6Pl7rrM', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (23, 'torphy.garland', 'julio.schumm@jacobson.info', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'cvZvNXyQ6I', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (24, 'amir74', 'felicita43@huels.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', '16H9f6RIBd', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (25, 'emmett.champlin', 'kmoen@hotmail.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'rR9gNmis8z', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (26, 'hyman05', 'zhalvorson@gerlach.org', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'qzjLon0iru', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (27, 'rachelle68', 'milan.bailey@langosh.net', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'Gwm93oCE72', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (28, 'freddie11', 'srowe@yahoo.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'JtXMNiHGCV', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (29, 'lavina.abernathy', 'mohammed75@hotmail.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'BrUm7hi4vt', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (30, 'morar.easter', 'bonnie88@yahoo.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'K7b8AQqWrp', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (31, 'river.wisozk', 'jordy.bernier@yahoo.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', '7hJJlVJ1Qc', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (32, 'jana.stehr', 'jazmin.kuphal@yahoo.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'Ts6c6rSalP', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (33, 'gfadel', 'arianna.jacobi@yahoo.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'ZZEV3radsr', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (34, 'georgette86', 'davonte12@fadel.biz', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'FOMoO0GJQx', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (35, 'edwina73', 'briana88@haley.org', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'ntFlTLhcKM', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (36, 'kitty.hayes', 'kiehn.jed@hotmail.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'ltpQx1ZEEk', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (37, 'jeffery.tillman', 'hdeckow@gmail.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'dkGx6ATOhc', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (38, 'heidi48', 'robert76@gmail.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'g2rEYfz8fa', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (39, 'adam00', 'johnson.brigitte@wuckert.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'OANNAqF5bn', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (40, 'tyrique.rempel', 'eduardo.stoltenberg@gmail.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', '2bjHbin4Z7', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (41, 'hlynch', 'ola.mann@hotmail.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'EnHv5IQXV6', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (42, 'johnson.olaf', 'becker.breanne@nitzsche.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'RFPkvZ3TIP', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (43, 'labadie.kelsie', 'hane.hollie@yahoo.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'ZTAnCpjSCb', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (44, 'gertrude01', 'rhudson@nolan.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'sMUnQuOz98', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (45, 'kenton.rau', 'mbayer@hotmail.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', '7hJJJpmkfS', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (46, 'cabshire', 'anjali.swift@gmail.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'CjB0LQnVOH', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (47, 'breitenberg.agustina', 'elbert51@gmail.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'CoPaVNDGXx', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (48, 'swatsica', 'jkub@gmail.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', '4Z530qWsOf', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (49, 'idickens', 'tom19@welch.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', 'QcUEGOv76s', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (50, 'cremin.maddison', 'clovis.powlowski@hilpert.com', '$2y$10$/7eveOdrnzpzpzzCN/cAheLbnQufniscKB2wNjxxXgoplSD.tZRMW', '6hTYcuusRx', '2018-05-12 06:15:05', '2018-05-12 06:15:05');
INSERT INTO `users` VALUES (51, 'mian', 'admin@q.com', '$2y$10$L7XwZ8p0JFZrbclVa3fvsOelw6JtwRLWHtjpKy5foQ9fneNKzlieW', NULL, '2018-05-13 03:01:22', '2018-05-13 03:01:22');
INSERT INTO `users` VALUES (52, 'mian', '45645645@q12.com', '$2y$10$55Uqshz3bjJSnnxi.KG1tOvEBmtwEhUFRPf7sDpIpd7LPwDIb7usC', NULL, '2018-05-13 03:02:25', '2018-05-13 03:10:03');

SET FOREIGN_KEY_CHECKS = 1;
