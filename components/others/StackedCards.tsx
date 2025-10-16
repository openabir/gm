import ScrollStack, { ScrollStackItem } from "../ui/ScrollStack";

export default function StackedCards() {
  return (
    <div>
          <ScrollStack
          itemStackDistance={50}
          itemScale={0.05}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.85}
          scaleDuration={0.5}
          rotationAmount={0}
          blurAmount={0}
          useWindowScroll={false}
          onStackComplete={() => {}}
          >
        <ScrollStackItem >
          <h2>Card 1</h2>
          <p>This is the first card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 2</h2>
          <p>This is the second card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 3</h2>
          <p>This is the third card in the stack</p>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
}
