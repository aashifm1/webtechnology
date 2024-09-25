def print_solution(board):
    """Prints the board configuration"""
    N = len(board)
    for i in range(N):
        row = ['Q' if board[i][j] else '.' for j in range(N)]
        print(' '.join(row))
    print()

def is_safe(board, row, col):
    """Checks if it's safe to place a queen at (row, col)"""
    N = len(board)
    
    # Check this column
    for i in range(row):
        if board[i][col]:
            return False

    # Check upper-left diagonal
    for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
        if board[i][j]:
            return False

    # Check upper-right diagonal
    for i, j in zip(range(row, -1, -1), range(col, N)):
        if board[i][j]:
            return False

    return True

def solve_n_queens_util(board, row):
    """Utilizes backtracking to solve N-Queens problem"""
    N = len(board)
    if row >= N:
        return True
    
    for col in range(N):
        if is_safe(board, row, col):
            board[row][col] = True
            if solve_n_queens_util(board, row + 1):
                return True
            board[row][col] = False
    
    return False

def solve_n_queens(N):
    """Sets up the board and solves the N-Queens problem"""
    board = [[False] * N for _ in range(N)]
    if solve_n_queens_util(board, 0):
        print_solution(board)
    else:
        print("No solution exists")

# Example usage
N = 8  # You can change this to any value of N
solve_n_queens(N)
