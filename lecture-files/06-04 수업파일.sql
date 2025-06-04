실습1-1

CREATE TABLE Departments (
    department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Students (
    student_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES Departments(department_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

------------------------

실습1-2
CREATE TABLE Users (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE UserProfiles (
    profile_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE,
    bio VARCHAR(5),
    website VARCHAR(500),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) 
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

------------------------
실습1-3

CREATE TABLE Users (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(10) NOT NULL UNIQUE
);

CREATE TABLE Hashtags (
    hashtag_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(10) NOT NULL UNIQUE
);

CREATE TABLE UserHashtagFollows (
    follow_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    hashtag_id INT,
    followed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) 
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    FOREIGN KEY (hashtag_id) REFERENCES Hashtags(hashtag_id) 
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

------------------------
실습2-1

SELECT 
  orders.order_id, 
  orders.order_date, 
  orders.amount,
  customers.customer_name
FROM orders
INNER JOIN customers 
  ON orders.customer_id = customers.customer_id;

-------------------------
실습2-2

SELECT 
  orders.order_id, 
  orders.order_date, 
  orders.amount,
  customers.customer_name
FROM orders
INNER JOIN customers 
  ON orders.customer_id = customers.customer_id
WHERE customers.customer_name = '김철수';

---------------------------
실습2-3

SELECT 
  orders.order_id, 
  orders.amount
FROM orders
INNER JOIN customers 
  ON orders.customer_id = customers.customer_id
WHERE orders.amount >= 100;

---------------------------
실습2-4

SELECT 
  customers.customer_name, 
  COUNT(orders.order_id) AS order_count
FROM customers
INNER JOIN orders 
  ON orders.customer_id = customers.customer_id
GROUP BY customers.customer_name;


-----------------------------
실습3-1

SELECT 
  Employees.emp_name,
  Employees.hire_date,
  Departments.dept_name
FROM Employees
LEFT JOIN Departments
  ON Employees.dept_id = Departments.dept_id;

------------------------------
실습3-2

SELECT dept_name
FROM Departments
LEFT JOIN Employees
  ON Departments.dept_id = Employees.dept_id
WHERE Employees.dept_id IS NULL;

------------------------------
실습3-3

SELECT 
  d.dept_name,
  COUNT(e.emp_id) AS employee_count
FROM Departments d
LEFT JOIN Employees e
  ON d.dept_id = e.dept_id
GROUP BY d.dept_id, d.dept_name;

--------------------------------
실습3-4

SELECT 
  e.emp_name,
  d.dept_name
FROM Employees e
INNER JOIN Departments d
  ON e.dept_id = d.dept_id
WHERE e.hire_date > '2023-01-01';

---------------------------------
실습4-1

SELECT
    e.emp_name,
    e.salary,
    d.dept_name
FROM
    Employees3 AS e
INNER JOIN
    Departments2 AS d ON e.dept_id = d.dept_id
WHERE
    d.dept_name = '재무부'
    AND e.salary > (
        SELECT AVG(salary)
        FROM Employees3
        WHERE dept_id = (SELECT dept_id FROM Departments2 WHERE dept_name = '재무부')
    );

