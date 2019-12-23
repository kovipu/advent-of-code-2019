# Intcode

This folder contains a simulator for the fictional Intcode computer.

Intcode computer reads integers as input, some of which take arguments immediately after them.

## Opcodes

| Name           | Opcode | Format  | Action                                   |
| -------------- | ------ | ------- | ---------------------------------------- |
| Addition       | 1      | 1 a b c | memory[c] = a + b                        |
| Multiplication | 2      | 2 a b c | memory[c] = a * b                        |
| Input          | 3      | 3 a     | memory[a] = user input                   |
| Output         | 4      | 4 a     | outputs value a                          |
| Jump-if-true   | 5      | 5 a b   | instruction_pointer = b if a is non-zero |
| Jump-if-false  | 6      | 6 a b   | instruction_pointer = b if a is zero     |
| Less than      | 7      | 7 a b c | memory[c] = 1 if a < b else 0            |
| Equals         | 8      | 8 a b c | memory[c] = 1 if a == b else 0           |
| Halt           | 99     | 99      | Halt immediately                         |
