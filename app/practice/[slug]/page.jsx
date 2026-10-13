import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Code2,
  CheckCircle2,
  Clock,
  Sparkles,
  BookOpen,
  Play,
  Terminal,
  HelpCircle,
} from "lucide-react";
import { problems } from "@/data/problems";

// Detailed problem metadata for practice slugs
const problemDetails = {
  "two-sum": {
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
      },
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists.",
    ],
    starterCode: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
  },
  "reverse-linked-list": {
    description:
      "Given the head of a singly linked list, reverse the list, and return the reversed list's head.",
    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
        explanation: "The pointers between nodes are flipped.",
      },
    ],
    constraints: [
      "The number of nodes in the list is the range [0, 5000].",
      "-5000 <= Node.val <= 5000",
    ],
    starterCode: `function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}`,
  },
  "valid-parentheses": {
    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Open brackets must be closed by the same type of brackets, and in the correct order.",
    examples: [
      {
        input: 's = "()[]{}"',
        output: "true",
        explanation: "All brackets open and close in matching pairs.",
      },
    ],
    constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only."],
    starterCode: `function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (const char of s) {
    if (char in map) {
      if (stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}`,
  },
};

export function generateStaticParams() {
  return problems.map((problem) => ({
    slug: problem.slug,
  }));
}

export default async function ProblemDetailPage({ params }) {
  const { slug } = await params;
  const problem = problems.find((p) => p.slug === slug);

  if (!problem) {
    notFound();
  }

  const details = problemDetails[slug] || {
    description: `Solve the ${problem.title} problem by writing an optimal algorithm with clean code and minimal space complexity.`,
    examples: [
      {
        input: "Example input data structure",
        output: "Expected output result",
        explanation: `Demonstrates the core edge case and invariants of ${problem.title}.`,
      },
    ],
    constraints: [
      "Standard algorithmic constraints apply.",
      "Optimized for O(N) or O(log N) runtime.",
    ],
    starterCode: `// Solution for ${problem.title}
function solution(input) {
  // Write your code here
  return input;
}`,
  };

  const difficultyColors = {
    Easy: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Medium: "bg-amber-50 text-amber-700 border-amber-200",
    Hard: "bg-rose-50 text-rose-700 border-rose-200",
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Top Navigation Bar */}
      <div className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/practice"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Back to Practice
          </Link>
          <div className="flex items-center gap-3">
            <span
              className={`rounded-full border px-3 py-1 text-xs font-bold ${
                difficultyColors[problem.difficulty] || "bg-slate-100"
              }`}
            >
              {problem.difficulty}
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Problem #{problem.id}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Problem Statement & Details */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <Code2 size={16} />
                <span>Coding Problem</span>
              </div>
              <h1 className="mt-3 text-3xl font-extrabold text-slate-900">
                {problem.title}
              </h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {problem.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-6">
                <h3 className="text-sm font-bold uppercase text-slate-500">
                  Description
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {details.description}
                </p>
              </div>

              {/* Examples */}
              <div className="mt-6 border-t border-slate-100 pt-6">
                <h3 className="text-sm font-bold uppercase text-slate-500">
                  Examples
                </h3>
                <div className="mt-4 space-y-4">
                  {details.examples.map((eg, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 font-mono text-xs"
                    >
                      <div className="text-slate-500">
                        <span className="font-bold text-slate-700">Input:</span>{" "}
                        {eg.input}
                      </div>
                      <div className="mt-1 text-slate-500">
                        <span className="font-bold text-slate-700">Output:</span>{" "}
                        {eg.output}
                      </div>
                      {eg.explanation && (
                        <div className="mt-2 font-sans text-xs text-slate-600">
                          <span className="font-semibold text-slate-700">
                            Explanation:
                          </span>{" "}
                          {eg.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Constraints */}
              <div className="mt-6 border-t border-slate-100 pt-6">
                <h3 className="text-sm font-bold uppercase text-slate-500">
                  Constraints
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {details.constraints.map((c, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs font-mono text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Code Workspace & Run Simulation */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-white shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal size={18} className="text-emerald-400" />
                  <span className="text-sm font-bold text-slate-200">
                    JavaScript (Node.js) Solution
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-slate-400">Ready to run</span>
                </div>
              </div>

              {/* Code Editor Preview */}
              <div className="mt-4 overflow-x-auto rounded-2xl bg-slate-950 p-4 font-mono text-xs leading-6 text-blue-200">
                <pre>{details.starterCode}</pre>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  <span>Time Complexity: O(N)</span>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110"
                >
                  <Play size={16} />
                  Run & Test Code
                </button>
              </div>
            </div>

            {/* Quick Tips Box */}
            <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-6">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
                <Sparkles size={18} />
                <span>Problem Solving Tip</span>
              </div>
              <p className="mt-2 text-xs leading-6 text-blue-900/80">
                Always walk through an edge case on paper before writing code.
                Consider empty inputs, single element arrays, and negative numbers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
