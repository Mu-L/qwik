import { component$, useTask$ } from '@builder.io/qwik';

export const HelloWorld = component$(() => {
  const getMethod = () => {
    return 'value';
  };
  const useMethod = getMethod();
  useTask$(() => {
    // eslint-disable-next-line no-console
    console.log(useMethod);
  });
  return <div></div>;
});
