@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    <div id="example"></div>
                    
                    <div><a href="{{ url('tasks')}}">GO</a></div>
                </div>
            </div>
        </div>
    </div>


</div>
<div id="addtask"></div>
@endsection
