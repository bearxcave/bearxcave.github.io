BOARD_SIZE = 15


class GomokuGame:
    def __init__(self):
        self.reset()

    def reset(self):
        self.board = [[None for _ in range(BOARD_SIZE)] for _ in range(BOARD_SIZE)]
        self.current_player = "black"
        self.winner = None
        return self.get_state()

    def play(self, row, col):
        if self.winner is not None:
            return self.get_state()

        if not (0 <= row < BOARD_SIZE and 0 <= col < BOARD_SIZE):
            return self.get_state()

        if self.board[row][col] is not None:
            return self.get_state()

        self.board[row][col] = self.current_player

        if self._has_five_in_row(row, col, self.current_player):
            self.winner = self.current_player
        elif self._is_board_full():
            self.winner = "draw"
        else:
            self.current_player = "white" if self.current_player == "black" else "black"

        return self.get_state()

    def get_state(self):
        if self.winner == "draw":
            status = "Draw."
        elif self.winner is not None:
            status = f"{self.winner.capitalize()} wins."
        else:
            status = f"{self.current_player.capitalize()} to move."

        return {
            "board": self.board,
            "current_player": self.current_player,
            "winner": self.winner,
            "status": status,
        }

    def _has_five_in_row(self, row, col, player):
        directions = ((1, 0), (0, 1), (1, 1), (1, -1))

        for dx, dy in directions:
            count = 1
            count += self._count_direction(row, col, dx, dy, player)
            count += self._count_direction(row, col, -dx, -dy, player)
            if count >= 5:
                return True

        return False

    def _count_direction(self, row, col, dx, dy, player):
        count = 0
        next_row = row + dx
        next_col = col + dy

        while (
            0 <= next_row < BOARD_SIZE
            and 0 <= next_col < BOARD_SIZE
            and self.board[next_row][next_col] == player
        ):
            count += 1
            next_row += dx
            next_col += dy

        return count

    def _is_board_full(self):
        return all(cell is not None for row in self.board for cell in row)


game = GomokuGame()
