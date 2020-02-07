FILES_SRC := $(shell find . -name '*.makefile')
DIR_TARGET := ../lib
TARGETS := $(FILES_SRC:%=$(DIR_TARGET)/%)

DIR_MAKEJS_LIB := ../node_modules/@makefile-for-js/lib
include $(DIR_MAKEJS_LIB)/lib/common.makefile

#######################################
# all
HELP +=\n\n**all**: make `TARGETS` and place into `DIR_TARGET`
.DEFAULT_GOAL := all
.PHONY: all
all: $(TARGETS)

#######################################
# clean
HELP +=\n\n**all**: remove `TARGETS`
.PHONY: clean
clean:
	rm $(TARGETS)

#######################################
#../lib/%.makefile
$(DIR_TARGET)/%.makefile: %.makefile
	cat header $< footer > $@


