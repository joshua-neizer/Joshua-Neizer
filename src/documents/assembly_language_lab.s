
@ This a lab that I worked on in my 2nd Year Computer Architecture class
@ This is written in ARMS assembly language

.file	"lab5.c"
	.comm	maxidx,4,4
	.comm	x,4,4
	.global	msg
	.data
	.align	2
	.type	msg, %object
	.size	msg, 6
msg:
	.ascii	"done\012\000"
	.comm	darr,48,4
	.text
	.align	2
	.global	findmax
	.type	findmax, %function
findmax:
	@ args = 0, pretend = 0, frame = 24
	@ frame_needed = 1, uses_anonymous_args = 0
	@ link register save eliminated.

	str	fp, [sp, #-4]! 
	add	fp, sp, #0
	sub	sp, sp, #28
	str	r0, [fp, #-24] @(int arr[])
	str	r1, [fp, #-28] @(int sz)
	mov	r3, #0 @(
	str	r3, [fp, #-16] @max = 0;)
	mov	r3, #0 @(
	str	r3, [fp, #-8] @int e = 0;)
	b	.L2
.L4:
	ldr	r3, [fp, #-8]  @(
	mov	r3, r3, asl #2 
	ldr	r2, [fp, #-24]
	add	r3, r2, r3 
	ldr	r2, [r3, #0] 
	ldr	r3, [fp, #-16] 
	cmp	r2, r3 
	ble	.L3 @ if (arr[e] > max) )
	ldr	r3, [fp, #-8] @(
	mov	r3, r3, asl #2 
	ldr	r2, [fp, #-24]
	add	r3, r2, r3  
	ldr	r3, [r3, #0] 
	str	r3, [fp, #-16] @ max = arr[e];)
	ldr	r3, [fp, #-8] @(
	str	r3, [fp, #-12] @ idx = e;)
.L3:
	ldr	r3, [fp, #-8] @(
	add	r3, r3, #1 
	str	r3, [fp, #-8] @ e++))
.L2:
	ldr	r2, [fp, #-8] @(
	ldr	r3, [fp, #-28] 
	cmp	r2, r3 @ e < sz;)
	blt	.L4 
	ldr	r3, [fp, #-12] @(
	mov	r0, r3 @return idx;)
	add	sp, fp, #0
	ldmfd	sp!, {fp}
	bx	lr
	.size	findmax, .-findmax
	.section	.rodata
	.align	2
.LC0:
	.ascii	"%d, \000"
	.align	2
.LC1:
	.ascii	"maxidx=%d\012\000"
	.text
	.align	2
	.global	main
	.type	main, %function
main:
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 1, uses_anonymous_args = 0
	stmfd	sp!, {fp, lr}
	add	fp, sp, #4
	ldr	r3, .L8
	mov	r2, #1			@(
	str	r2, [r3, #0]		@	for (x = 1;  )
	b	.L6
.L7:
	ldr	r3, .L8 @( 
	ldr	r2, [r3, #0]
	ldr	r3, .L8 
	ldr	r3, [r3, #0]
	add	r1, r3, #1 
	ldr	r3, .L8 
	ldr	r3, [r3, #0]
	eor	r3, r1, r3 
	add	r1, r3, #1 
    ldr	r3, .L8+4  
	str	r1, [r3, r2, asl #2] @ darr [x] = (x^(x+1))+1;)
	ldr	r2, .L8+8 @(
	ldr	r3, .L8 
	ldr	r1, [r3, #0]
	ldr	r3, .L8+4 
	ldr	r3, [r3, r1, asl #2] 
	mov	r0, r2 
	mov	r1, r3 
	bl	printf @ printf("%d, ",darr[x]);)
	ldr	r3, .L8			@(
	ldr	r3, [r3, #0]
	add	r2, r3, #1
	ldr	r3, .L8
	str	r2, [r3, #0]		@ 	x++))
.L6:
	ldr	r3, .L8			@(
	ldr	r3, [r3, #0]
	cmp	r3, #12
	ble	.L7			@	x<=12; )
	mov	r0, #10 @(
	bl	putchar  @printf("\n"); )
	ldr	r0, .L8+4 @(
	mov	r1, #12 
	bl	findmax 
	mov	r2, r0
	ldr	r3, .L8+12
	str	r2, [r3, #0] @ maxidx = findmax(darr,arrsize);)
	ldr	r2, .L8+16  @(
	ldr	r3, .L8+12 
	ldr	r3, [r3, #0]
	mov	r0, r2
	mov	r1, r3
	bl	printf @printf("maxidx=%d\n",maxidx);)
	ldmfd	sp!, {fp, pc}
.L9:
	.align	2
.L8:
	.word	x
	.word	darr
	.word	.LC0
	.word	maxidx
	.word	.LC1
	.size	main, .-main
	.ident	"GCC: (Debian 4.6.3-14+rpi1) 4.6.3"
	.section	.note.GNU-stack,"",%progbits










