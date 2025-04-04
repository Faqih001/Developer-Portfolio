
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Trash2 } from 'lucide-react';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  created_at?: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchTodos() {
      try {
        setIsLoading(true);
        // Use type assertion to work around type checking issues
        const { data, error } = await (supabase as any)
          .from('todos')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          console.error('Error fetching todos:', error);
          toast({
            title: 'Error fetching todos',
            description: error.message,
            variant: 'destructive',
          });
        } else {
          setTodos(data as Todo[] || []);
        }
      } catch (error) {
        console.error('Supabase connection error:', error);
        toast({
          title: 'Connection error',
          description: 'Could not connect to the database',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchTodos();
  }, [toast]);

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      // Use type assertion to work around type checking issues
      const { data, error } = await (supabase as any)
        .from('todos')
        .insert([{ title: newTodo.trim(), completed: false }])
        .select();
      
      if (error) {
        console.error('Error adding todo:', error);
        toast({
          title: 'Error adding todo',
          description: error.message,
          variant: 'destructive',
        });
      } else if (data) {
        setTodos([...(data as Todo[]), ...todos]);
        setNewTodo('');
        toast({
          title: 'Todo added',
          description: 'Your todo was added successfully!',
        });
      }
    } catch (error) {
      console.error('Supabase connection error:', error);
      toast({
        title: 'Connection error',
        description: 'Could not connect to the database',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    try {
      // Use type assertion to work around type checking issues
      const { error } = await (supabase as any)
        .from('todos')
        .update({ completed: !completed })
        .eq('id', id);
      
      if (error) {
        console.error('Error updating todo:', error);
        toast({
          title: 'Error updating todo',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        setTodos(todos.map(todo => 
          todo.id === id ? { ...todo, completed: !completed } : todo
        ));
      }
    } catch (error) {
      console.error('Supabase connection error:', error);
      toast({
        title: 'Connection error',
        description: 'Could not connect to the database',
        variant: 'destructive',
      });
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      // Use type assertion to work around type checking issues
      const { error } = await (supabase as any)
        .from('todos')
        .delete()
        .eq('id', id);
      
      if (error) {
        console.error('Error deleting todo:', error);
        toast({
          title: 'Error deleting todo',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        setTodos(todos.filter(todo => todo.id !== id));
        toast({
          title: 'Todo deleted',
          description: 'Your todo was deleted successfully!',
        });
      }
    } catch (error) {
      console.error('Supabase connection error:', error);
      toast({
        title: 'Connection error',
        description: 'Could not connect to the database',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Todo List</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={addTodo} className="flex space-x-2 mb-6">
          <Input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            disabled={isSubmitting}
            className="flex-1"
          />
          <Button type="submit" disabled={isSubmitting || !newTodo.trim()}>
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Add'}
          </Button>
        </form>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : todos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No todos yet. Add one above!
          </div>
        ) : (
          <div className="space-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id, todo.completed)}
                    id={`todo-${todo.id}`}
                  />
                  <label
                    htmlFor={`todo-${todo.id}`}
                    className={`${todo.completed ? 'line-through text-gray-500' : ''}`}
                  >
                    {todo.title}
                  </label>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteTodo(todo.id)}
                  className="text-destructive hover:text-destructive/90"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="text-sm text-gray-500 text-center">
        {todos.length > 0 && `${todos.filter(t => t.completed).length} of ${todos.length} completed`}
      </CardFooter>
    </Card>
  );
}
