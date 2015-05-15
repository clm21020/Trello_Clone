# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

# debugger
json.extract! @board, :id, :title
# maybe put back :user_id

json.lists do
  json.array! @board.lists do |list|
    json.extract! list, :id, :title, :ord
# maybe put back :board_id
  end
end
