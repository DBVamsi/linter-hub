def add(a, b):
    # Comment removed for clarity, Black would handle line length
    result = a + b
    return result


def subtract(a, b):  # Black might move this comment or reformat around it
    "This function uses double quotes for its docstring."
    return a - b  # Spacing around operator


if __name__ == "__main__":
    x = 10
    y = 5
    add_result = add(x, y)
    sub_result = subtract(x, y)  # Spacing in call
    # Conceptual print lines removed for lint-passing code
