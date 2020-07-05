require 'rails_helper'

describe Score, "#metric" do
  it "returns a score’s metric" do
    score = build(:score)

    expect(score.metric).to eq []
  end
end

describe Score, "#submission" do
  it "returns a score’s submission" do
    score = build(:score)

    expect(score.submission).to eq ""
  end
end
