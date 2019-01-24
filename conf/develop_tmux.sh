#!/bin/bash
SESSION=mod

tmux -2 new-session -d -s $SESSION

# set up app window
tmux new-window -t $SESSION:2 -n 'app'
tmux split-window -h
tmux split-window -h
tmux select-pane -t 0
tmux send-keys "pushd app && npm install && npm run dev" C-m

# set up kbucket moving parts window
tmux select-pane -t 1
tmux send-keys "pushd db && PORT=3001 make start_dev" C-m

## kbucket hub pane
tmux select-pane -t 2
tmux send-keys "sleep 5 && pushd db && PORT=3001 make import" C-m
tmux send-keys "sleep 2 && mongo --port=3001" C-m

tmux new-window -t $SESSION:3 -n 'dev'
tmux select-window -t $SESSION:3

tmux -2 attach-session -t $SESSION
