<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Task;
use Log;
use Auth;
class TaskApiController extends Controller
{
    
    public function index()
    {
            $id = Auth::guard('api')->user()->id;
            $tasks = Task::orderBy('id', 'DESC')->where('user_id','=',$id)->get();
            return response()->json([
                'tasks' => $tasks,
            ]);
    }
    
    public function create(Request $request)
    {
        //
        // $id = Auth::guard('api')->user()->id;
        // Log::info($id);
        // $input = $request->input("task");
        // $task = new Task;
        // $task->name = $input;
        // $task->user_id = $id;
        // $task->save();
        $this->validate($request, [
            'name' => 'required|max:255',
        ]);

        return response()->json([
            'task' => $request->user()->tasks()->create([
            'name' => $request->name,
        ])
        ]);
    }
    
    public function edit($id)
    {
        //
    }
    
    public function destroy(Request $request,$taskId)
    {
        //
        $task = Task::where('id',$taskId)->first();
        $task->delete();
        return response()->json([
            'task'=>$task
        ]);
    }
}