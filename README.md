# Manisa Engereği
This repo defines "Manisa Engereği" (A Turkish programming language) and a bytecode interpreter for it.

### Info About Language
I am too lazy to create documentation for this, language is pretty much like python.\
Every literal, variable, function or whatever comes to mind creates an MEObject.\
Language's object system is designed through the way it allows classes and operator overloading. So it internally allows class creation / operator overloading for them.\
For example internal types like strings already have their "+" operator overloaded as concanation and "*" for repetition of string.\
Manisa engereği is garbage collected through reference counting and it is enough (for now).\

###  Builtins and Standard Library
Manisa engereği supports built-in typecasts like converting an string to integer, bool, float etc... or viceversa and things like float to int, int to float etc.
Language currentlys supports some standard io features like printing to terminal, opening / closing a file handle (), writing / reading to a stream etc.

### Todo:
* Compiled Bytecode is holded in RAM currently add an option to compile bytecode and save at disk (*.mebc)
* Add an option to run bytecode files (*.mebc)
* Using arena allocators instead of overusing mallocs
* Standard socket Library
* Optimization

### Some Code Examples
Just look at the last pages of report.

### Notes
Runtime is pretty much like cpython's (which is a pretty bad design decision for performance imo but gives flexibility).
