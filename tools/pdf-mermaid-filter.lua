local function has_class(classes, target)
  for _, class in ipairs(classes) do
    if class == target then
      return true
    end
  end
  return false
end

function CodeBlock(block)
  if has_class(block.classes, "mermaid") then
    return pandoc.Para({
      pandoc.Strong({ pandoc.Str("Diagram:") }),
      pandoc.Space(),
      pandoc.Str("Rendered in the Visual Diagrams Appendix PDF.")
    })
  end
  return nil
end
