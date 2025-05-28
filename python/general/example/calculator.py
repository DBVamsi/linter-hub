import os # F401: Unused import
import sys # F401: Another unused import, to be sure

def add(a, b):
  # Intentionally bad indentation for the next line
     result = a + b
  unused_variable = 'I am not used' # F841: Unused local variable
  print(f'The result is: {result}') # T201: print found
  return result

def subtract(a,b): # Missing a newline before this function (ruff rule often checks this, or black would enforce it)
    'This function uses single quotes for its docstring.' # Ruff might flag this if a specific docstring convention is enforced, but main goal is string quotes for code
    return a-b

if __name__ == '__main__':
    x = 10
    y = 5
    print('Adding 10 and 5') # T201: print found, and single quotes
    add_result = add(x, y)
    # Black would reformat the next line significantly
    print (f'Subtracting 5 from 10') # T201: print found, single quotes, and odd spacing with print
    sub_result = subtract(x,y)
