# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    association :profile
  end
end
