# Intcode

This folder contains a simulator for the fictional Intcode computer.

Intcode computer reads integers as input, some of which take arguments immediately after them.

## Opcodes

| Name           | Opcode | Format  | Action                 |
| -------------- | ------ | ------- | ---------------------- |
| Addition       | 1      | 1 a b c | c = a + b              |
| Multiplication | 2      | 2 a b c | c = a * b              |
| Input          | 3      | 3 a     | memory[a] = user input |
| Halt           | 99     | 99      | Halt immediately       |
