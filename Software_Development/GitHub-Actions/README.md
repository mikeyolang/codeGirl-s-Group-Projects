# mygithubActions 
*Explanation of the code*
#### The `main.py` file defines four simple functions that perform basic arithmetic operations: add, subtract, multiply, and divide. <br/>
We can use these functions to test our GitHub Actions workflow by writing tests that ensure the functions behave as expected. For example we can use the `testPython.py`
#### The `testPython.py` file defines four test functions that use the `assert` statement to ensure that the add, subtract, multiply, and divide functions return the correct results for various inputs. The last test function tests that divide raises a `ValueError` when attempting to divide by zero.
You can run these tests locally to ensure that they pass before pushing your changes to GitHub and triggering your GitHub Actions workflow. To run the tests, simply execute `testPython.py` from the command line in the same directory as the two files.
