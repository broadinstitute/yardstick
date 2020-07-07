class Partition < ApplicationRecord
  validates :checksum,    presence: true
  validates :description, presence: true
  validates :href,        presence: true
end
