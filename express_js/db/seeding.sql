-- Soal 1: Lakukan seeding untuk menambahkan 5 data baru pada data table actor yang disediakan


insert into actor (actor_id, first_name, last_name, last_update)
values
  (201, 'Yohanes', 'Bima', NOW()),
  (202, 'Jessica', 'Lee', NOW()),
  (203, 'Michael', 'Smith', NOW()),
  (204, 'Emily', 'Johnson', NOW()),
  (205, 'Daniel', 'Williams', NOW()),
  (206, 'Sophia', 'Brown', NOW());
