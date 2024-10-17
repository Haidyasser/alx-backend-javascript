## 0x01-python_async_function
### This is a directory that contains files for the tasks of the project 0x01. Python - Async
### The files present in this directory are:
1. **0-basic_async_syntax.py**
2. **1-concurrent_coroutines.py**
3. **2-measure_runtime.py**
4. **3-tasks.py**
5. **4-tasks.py**
6. **5-tasks.py**
7. **README.md**
8. **main.py**

### Description of the tasks:
0. **0-basic_async_syntax.py** - Write an asynchronous coroutine that takes in an integer argument (max_delay, with a default value of 10) named wait_random that waits for a random delay between 0 and max_delay (included and float value) seconds and eventually returns it.
1. **1-concurrent_coroutines.py** - Import wait_random from the previous python file that you’ve written and write an async routine called wait_n that takes in 2 int arguments (in this order): n and max_delay. You will spawn wait_random n times with the specified max_delay.
2. **2-measure_runtime.py** - Import wait_n from the previous file and write a program that measures the total execution time for wait_n(n, max_delay), and prints n and total time.
3. **3-tasks.py** - Import wait_random from 0-basic_async_syntax.py. Write a function (do not create an async function, use the regular function syntax to do this) task_wait_random that takes an integer max_delay and returns a asyncio.Task.
4. **4-tasks.py** - Import wait_random from 0-basic_async_syntax.py. Write a function (do not create an async function, use the regular function syntax to do this) task_wait_random that takes an integer max_delay and returns a asyncio.Task.
5. **5-tasks.py** - Import wait_random from 0-basic_async_syntax.py. Write a function (do not create an async function, use the regular function syntax to do this) task_wait_n that takes an integer n and max_delay and returns a asyncio.Task.