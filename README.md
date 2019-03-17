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
The output of reverse-sourcemap --help pretty much covers all the options:  
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

sourcecode info:
<font color=#e3e24d >sourcecode info:</font>  
<font color=#3771c1 >sourceCodePath</font>:<font color=#52b17b >webpack:///src/page/manage.vue</font>  
<font color=#3771c1 >line</font>:<font color=#52b17b >3</font>  
<font color=#3771c1 >column</font>:<font color=#52b17b >66</font>
<font color=#3771c1 >name</font>:<font color=#52b17b >exports</font>