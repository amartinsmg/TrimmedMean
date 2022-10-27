#include <stdlib.h>

#ifndef assert

#define assert(condition) (condition ? 0 : exit(-1))

#endif
