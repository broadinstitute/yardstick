class CreateSubmissions < ActiveRecord::Migration[6.0]
  def change
    create_table :submissions do |t|

      t.timestamps
    end
  end
end
