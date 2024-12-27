#include <stdio.h>

void main() {
   int array[100],sum=0, i,no=0;
   
   printf("How many no you want to input?");
   scanf("%d",&no);

   for(i=0;i<no;i++){
        printf("\nEnter %d no : ",i+1);
        scanf("%d",&array[i]);
    }

   for(i = no-1; i >= 0; i--) {
      sum = sum + array[i];      
   }

   printf("Sum of array is %d.", sum);   
}