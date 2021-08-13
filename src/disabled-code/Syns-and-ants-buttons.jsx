import React from 'react';

// For words-container-content file
const SynsAntsDisabled = () => {
  const turnWordInToList = (MainObj, FirstWords) => {
    let ReturnedObj = [];
    ReturnedObj = MainObj.map((word, index) => {
      if (MainObj !== undefined) {
        if (FirstWords) {
          if (index >= 1 && index <= 4) {
            if (MainObj[index + 1] === undefined) {
              return <ListItem borderRadius="xl" background={bg} _hover={hoverSynAntItems} className="cursor-pointer" onClick={onClickWords} listStyleType="none" display="inline-block" key={word}>{word}</ListItem>;
            }
            return (
              <>
                <ListItem borderRadius="xl" mr="2" paddingX="2" paddingY="1" mb="1" background={bg} _hover={hoverSynAntItems} className="cursor-pointer" onClick={onClickWords} listStyleType="none" display="inline-block" key={word}>{word}</ListItem>

              </>
            );
          }
        } else if (!FirstWords) {
          if (index > 4) {
            if (MainObj[index + 1] === undefined) {
              return <ListItem borderRadius="xl" background={bg} _hover={hoverSynAntItems} className="cursor-pointer" onClick={onClickWords} listStyleType="none" display="inline-block" key={word}>{word}</ListItem>;
            }
            return (
              <>
                <ListItem borderRadius="xl" mr="2" paddingX="2" paddingY="1" mb="1" background={bg} _hover={hoverSynAntItems} className="cursor-pointer" onClick={onClickWords} listStyleType="none" display="inline-block" key={word}>{word}</ListItem>

              </>
            );
          }
        } else if (!FirstWords) {
          if (index > 4) {
            if (MainObj[index + 1] === undefined) {
              return <ListItem borderRadius="xl" background={bg} _hover={hoverSynAntItems} className="cursor-pointer" onClick={onClickWords} listStyleType="none" display="inline-block" key={word}>{word}</ListItem>;
            }
            return (
              <>
                <ListItem borderRadius="xl" mr="2" paddingX="2" paddingY="1" mb="1" background={bg} _hover={hoverSynAntItems} className="cursor-pointer" onClick={onClickWords} listStyleType="none" display="inline-block" key={word}>{word}</ListItem>

              </>
            );
          }
        }
      }
      return false;
    });
    if (!FirstWords) {
      return (
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton bg={bg} borderRadius="xl">
                <Box flex="1" textAlign="left">
                  ...
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              {ReturnedObj}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      );
    }

    return ReturnedObj;
  };

  const OrderSynonyms = () => turnWordInToList(Syns, true);
  const OrderAntonyms = () => turnWordInToList(Ants, true);
  const RestOfSyns = () => turnWordInToList(Syns, false);
  const RestOfAnts = () => turnWordInToList(Ants, false);
  return (
    <div />
  );
};

export default SynsAntsDisabled;
