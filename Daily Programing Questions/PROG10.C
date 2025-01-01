#include <stdio.h>
#include<conio.h>

int main() {
    int row, col;
    clrscr();

    printf("Enter the number of rows and columns: ");
    scanf("%d %d", &row, &col);

    int first[row][col], second[row][col], result[row][col];

    printf("Enter elements of first matrix:\n");
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            scanf("%d", &first[i][j]);
        }
    }

    printf("Enter elements of second matrix:\n");
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            scanf("%d", &second[i][j]);
        }
    }

    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            result[i][j] = first[i][j] + second[i][j];
        }
    }

    printf("Resultant matrix after addition:\n");
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            printf("%d ", result[i][j]);
        }
        printf("\n");
    }

    getch();
}
