# Python Linting & Formatting: Ruff + Black

This directory provides a configuration for maintaining modern, fast, and consistent Python code quality using Ruff and Black.

## Philosophy

The goal of this setup is to leverage powerful, modern tools to ensure code is readable, consistent, and free of common errors with minimal manual effort.
-   **Ruff** is used for its speed as an all-in-one linter (combining functionality of tools like Flake8, isort, pyupgrade, and more) and formatter.
-   **Black** is used for its uncompromising and deterministic code formatting, ensuring a single, consistent style.

While Ruff *can* format, this setup uses Black for formatting to adhere to its widely adopted style, and Ruff for linting and import sorting, complementing Black. The `pyproject.toml` is configured so their line length and other relevant settings are compatible.

## Tools

*   **Ruff**: An extremely fast Python linter and formatter, written in Rust. It can replace Flake8, isort, pydocstyle, pyupgrade, and many other tools.
    *   In this configuration, it's primarily used for linting (error checking, style guide enforcement, import sorting, complexity checks, etc.).
    *   The specific rules selected are listed in `pyproject.toml` under `[tool.ruff.lint.select]`.
    *   It also respects the `line-length` and `quote-style` settings from `pyproject.toml`.
*   **Black**: The uncompromising Python code formatter. It ensures a consistent style by parsing your code and re-printing it.
    *   The `line-length` and `target-version` are configured in `pyproject.toml`.

## Installation

To use this setup in your Python project, you'll typically want to install Ruff and Black as development dependencies.

1.  **Install the tools** (preferably in a virtual environment):
    ```bash
    pip install ruff black
    ```

2.  **Add to development dependencies**:
    If you use a `requirements-dev.txt` file, add them there:
    ```
    ruff
    black
    ```
    If you manage dependencies in `pyproject.toml` (e.g., with Poetry or PDM), add them to your `[tool.poetry.group.dev.dependencies]` or equivalent section.

## Configuration

The configurations for both Ruff and Black are stored in the `pyproject.toml` file located in this directory. If you adapt this setup for your own project, you would place this `pyproject.toml` (or add its relevant sections to your existing one) in your project's root directory.

Key settings in `pyproject.toml`:
*   `[tool.black]`: Sets `line-length` and `target-version`.
*   `[tool.ruff]`: Sets global `line-length`.
*   `[tool.ruff.lint]`: Defines the selected lint rules (`select`) and any ignored rules (`ignore`).
*   `[tool.ruff.format]`: Defines formatter settings like `quote-style`. (Note: Even if using Black for primary formatting, Ruff's formatter settings can be useful for its own `ruff format` command or if Ruff is used for all formatting).

## Usage

Once configured, you can run the tools from your project's root directory (where `pyproject.toml` is located):

*   **Check for linting issues with Ruff**:
    ```bash
    ruff check .
    ```
    To automatically fix fixable issues (like import sorting):
    ```bash
    ruff check . --fix
    ```

*   **Check formatting with Black** (shows files that would be reformatted):
    ```bash
    black --check .
    ```

*   **Apply formatting with Black**:
    ```bash
    black .
    ```

*   **Format with Ruff** (alternative, if you prefer Ruff's formatter for everything):
    ```bash
    ruff format .
    ```

**Workflow Integration**:
This setup is complemented by the `.github/workflows/python-lint.yml` GitHub Actions workflow, which automatically checks code in the `python/general/` directory on pushes and pull requests.

## Example

The `example/calculator.py` file within this directory serves as a simple demonstration. It was initially written with several intentional linting and formatting errors, which were then corrected using Ruff and Black according to the rules in `pyproject.toml`. This ensures it passes the checks in our automated workflow.
