
CREATE TABLE user (
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  pw VARCHAR(20) NOT NULL,
  name VARCHAR(5) NOT NULL,
  gender ENUM('F', 'M', '') DEFAULT '',
  birdthday DATE NOT NULL,
  age INT(3) NOT NULL DEFAULT 0
);


INSERT INTO user (id, pw, name, gender, birdthday, age) VALUES ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user (id, pw, name, gender, birdthday, age) VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user (id, pw, name, gender, birdthday, age) VALUES ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user (id, pw, name, gender, birdthday, age) VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user (id, pw, name, gender, birdthday, age) VALUES ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user (id, pw, name, gender, birdthday, age) VALUES ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user (id, pw, name, gender, birdthday, age) VALUES ('jungkrat', '41fha7f', '정크랫', 'M', '1999-11-11', 24);


SELECT id, name, DATE_FORMAT(birdday, '%Y-%m-%d') AS birth_formatted
FROM user
WHERE YEAR(birdday) BETWEEN 1990 AND 1999
ORDER BY id ASC;


SELECT id, name, DATE_FORMAT(birdday, '%Y-%m-%d') AS birth_formatted
FROM user
WHERE MONTH(birdday) = 6
ORDER BY id ASC;


SELECT id, name, age
FROM user
ORDER BY age DESC
LIMIT 3;


SELECT id, name, age
FROM user
WHERE age BETWEEN 20 AND 40
ORDER BY age DESC
LIMIT 3;


DELETE FROM user WHERE id = 'jungkrat';


INSERT INTO `test_shop`.`products` ( `name`, `price`, `category`) VALUES
( '노트북1', '10000', 'A'),
( '노트북2', '12000', 'B'),
( '노트북3', '13000', 'A'),
( '노트북4', '14000', 'B'),
( '노트북5', '15000', 'C');

SELECT * FROM test_shop.products;


SELECT category, avg(price) avg_price FROM test_shop.products
Group BY category
having avg_price > 11500;