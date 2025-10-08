# Manisa Engereği
This repo defines "Manisa Engereği" (A Turkish programming language) and a bytecode interpreter for it.

### Info About Language
I am too lazy to create documentation for this, language is pretty much like python, every literal, variable, function or whatever comes to mind creates an MEObject.
Language's object system is designed through the way it allows classes and operator overloading. So it internally allows class creation / operator overloading for them.
Manisa engereği is garbage collected through reference counting it is enough for now.

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
Just look at the last pages of report don't make me copy it here.
