import { Button } from './ui/button';
import { FaArrowUp } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

type ChatbotFormData = {
   prompt: string;
};

const Chatbot = () => {
   const { register, handleSubmit, reset, formState } =
      useForm<ChatbotFormData>();

   const onSubmit = (data: ChatbotFormData) => {
      console.log(data);
      reset();
   };

   const onKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleSubmit(onSubmit)();
      }
   };

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         onKeyDown={onKeyDown}
         className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl"
      >
         <textarea
            {...register('prompt', {
               required: true,
               validate: (data) => data.trim().length > 0,
            })}
            className="w-full border-0 focus:outline-0 resize-none"
            placeholder="Ask anything"
            maxLength={10000}
         />
         <Button disabled={!formState.isValid} className="rounded-full w-9 h-9">
            <FaArrowUp />
         </Button>
      </form>
   );
};

export default Chatbot;
