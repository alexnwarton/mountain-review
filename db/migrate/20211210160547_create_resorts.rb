class CreateResorts < ActiveRecord::Migration[6.1]
  def change
    create_table :resorts do |t|
      t.string :name
      t.string :city
      t.string :state
      t.string :country
      t.text :description
      t.string :img_url

      t.timestamps
    end
  end
end
