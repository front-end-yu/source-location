# Source-location
> This is a cli to get location of original source code.

## Why use  
Since the production environment code is compiled code, the rows and columns that collect the error information cannot correspond in the source code. Source-location is a command-line widget used to locate the source code to help locate the source location quickly and improve efficiency. Before using this cli, you need to compile a map file of the production environment yourself.

## Install
Install the source-location command line utility globally with npm. Elevated privileges might be needed via sudo, depending on the platform. In most cases just:  
```bash
npm install --global source-location
```
## Command line options  
The output of source-location --help pretty much covers all the options:  
```bash
Usage: sl [options]

Options:
  -v, --version           output the version number
  -p, --source-flie-path  The generated source file
  -l, --ine               The line number in the generated source
  -c, --column            The column number in the generated source
  -h, --help              output usage information
```

## Testing
use the following commands
```bash
sl -p dist/1.f47efcb58028826c7c05.js.map -l 1 -c 34 
```    
output：
```bash
sourcecode info:
sourceCodePath: webpack:///src/pages/common/403.vue // 
line: 4
column: 15
name: export
```

## Output properties
sourceCodePath: The original source file, or null if this information is not available.  
line: The line number in the original source, or null if this information is not available. The line number is 1-based.  
column: The column number in the original source, or null if this information is not available. The column number is 0-based.  
name: The original identifier, or null if this information is not available.  
