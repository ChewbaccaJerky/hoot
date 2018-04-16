class ChangeBioDefaultValueToEmptyString < ActiveRecord::Migration[5.1]
  def change
    change_column_default :users, :bio, from: nil, to: ''
  end
end

