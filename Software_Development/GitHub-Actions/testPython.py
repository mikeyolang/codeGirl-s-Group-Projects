# test_test.py

import test

def test_add():
    assert test.add(1, 2) == 3
    assert test.add(-1, 1) == 0

def test_subtract():
    assert test.subtract(3, 2) == 1
    assert test.subtract(1, -1) == 2

def test_multiply():
    assert test.multiply(2, 3) == 6
    assert test.multiply(2, -3) == -6

def test_divide():
    assert test.divide(6, 3) == 2
    assert test.divide(1, -1) == -1
    try:
        test.divide(1, 0)
    except ValueError:
        pass
    else:
        assert False, 'Expected ValueError'
